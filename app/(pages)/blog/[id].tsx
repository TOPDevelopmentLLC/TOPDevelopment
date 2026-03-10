import axios from 'axios';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { router, useLocalSearchParams } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import { BlogPostDetail } from 'lib/data/blog';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { toast } from 'sonner';

const BlogDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isAuthenticated, token } = useAuth();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://api.thatoneprogrammer.dev/api/v1/blogs/${id}`,
          { timeout: 10000 }
        );
        setPost(response.data);
      } catch (err: any) {
        console.error('Failed to fetch blog post:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleEditToggle = () => {
    if (!post) return;
    if (isEditing) {
      // Cancel — reset content
      if (contentRef.current) {
        contentRef.current.innerHTML = post.content;
      }
      setEditTitle(post.title);
    } else {
      setEditTitle(post.title);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (!post || !contentRef.current) return;
    setIsSaving(true);
    try {
      const updatedContent = contentRef.current.innerHTML;
      await axios.put(
        `https://api.thatoneprogrammer.dev/api/v1/blogs/${id}`,
        { title: editTitle, content: updatedContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 10000,
        }
      );
      setPost({ ...post, title: editTitle, content: updatedContent });
      setIsEditing(false);
      toast.success('Blog post updated successfully!');
    } catch (error: any) {
      let errorMessage = 'Failed to update blog post';
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        errorMessage = `Error: ${error.response.status}`;
      }
      toast.error(errorMessage);
      console.error('Blog update error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <BasePage>
        <HeroSection badge={undefined} title="Loading..." subtitle="" />
        <View style={styles.contentSection}>
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={Colors.brand.primary} />
          </View>
        </View>
      </BasePage>
    );
  }

  if (!post) {
    return (
      <BasePage>
        <HeroSection
          badge={undefined}
          title="Post Not Found"
          subtitle="The blog post you're looking for doesn't exist"
        />
        <View style={styles.contentSection}>
          <View style={styles.contentContainer}>
            <PrimaryButton onPress={() => router.push('/blog' as any)}>
              Back to Blog
            </PrimaryButton>
          </View>
        </View>
      </BasePage>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <BasePage>
      <HeroSection
        badge={undefined}
        title={isEditing ? '' : post.title}
        subtitle={isEditing ? '' : `By ${post.authorEmail} · ${formattedDate}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          {/* Edit controls for authenticated users */}
          {isAuthenticated && (
            <View style={styles.editBar}>
              {!isEditing ? (
                <Pressable onPress={handleEditToggle} style={styles.editButton}>
                  <IconContainer
                    iconProps={{ name: 'edit', size: 18, color: Colors.brand.primary, type: IconType.MaterialIcons }}
                  />
                  <Text style={styles.editButtonText}>Edit Post</Text>
                </Pressable>
              ) : (
                <View style={styles.editActions}>
                  <Pressable onPress={handleEditToggle} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </Pressable>
                  <Pressable onPress={handleSave} style={styles.saveButton} disabled={isSaving}>
                    <Text style={styles.saveButtonText}>{isSaving ? 'Saving...' : 'Save'}</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {/* Editable title */}
          {isEditing && (
            <TextInput
              style={styles.titleInput}
              value={editTitle}
              onChangeText={setEditTitle}
              placeholder="Blog post title"
              placeholderTextColor={Colors.text.secondary}
              multiline
            />
          )}

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'person', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{post.authorEmail}</Text>
            </View>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'calendar-today', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{formattedDate}</Text>
            </View>
          </View>

          <style dangerouslySetInnerHTML={{ __html: blogContentStyles + (isEditing ? editingStyles : '') }} />
          <div
            ref={contentRef}
            className={`blog-content${isEditing ? ' blog-content-editing' : ''}`}
            contentEditable={isEditing}
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {!isEditing && (
            <View style={styles.backButton}>
              <PrimaryButton onPress={() => router.push('/blog' as any)}>
                Back to Blog
              </PrimaryButton>
            </View>
          )}
        </View>
      </View>
    </BasePage>
  );
};

const blogContentStyles = `
  .blog-content {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    line-height: 1.75;
  }
  .blog-content h1 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography['2xl']}px;
    font-weight: bold;
    margin-top: ${Spacing.xl * 2}px;
    margin-bottom: ${Spacing.lg}px;
  }
  .blog-content h2 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography.xl}px;
    font-weight: bold;
    margin-top: ${Spacing.xl * 1.5}px;
    margin-bottom: ${Spacing.md}px;
  }
  .blog-content h3 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography.lg}px;
    font-weight: 500;
    margin-top: ${Spacing.xl}px;
    margin-bottom: ${Spacing.sm}px;
  }
  .blog-content p {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    line-height: 1.75;
    margin-bottom: ${Spacing.md}px;
  }
  .blog-content strong {
    font-weight: bold;
    color: ${Colors.text.primary};
  }
  .blog-content em {
    font-style: italic;
    color: ${Colors.text.secondary};
  }
  .blog-content a {
    color: ${Colors.brand.primary};
    text-decoration: underline;
  }
  .blog-content blockquote {
    background-color: rgba(255, 255, 255, 0.05);
    border-left: 4px solid ${Colors.brand.primary};
    padding: ${Spacing.md}px ${Spacing.lg}px;
    margin: ${Spacing.md}px 0;
  }
  .blog-content code {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.brand.primary};
    font-family: monospace;
    padding: 2px ${Spacing.xs}px;
    border-radius: 4px;
  }
  .blog-content pre {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: ${Spacing.md}px;
    font-family: monospace;
    font-size: ${Typography.sm}px;
    color: ${Colors.text.primary};
    margin: ${Spacing.md}px 0;
    overflow-x: auto;
  }
  .blog-content pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
  }
  .blog-content ul, .blog-content ol {
    margin-bottom: ${Spacing.md}px;
    padding-left: ${Spacing.xl}px;
  }
  .blog-content li {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    margin-bottom: ${Spacing.xs}px;
  }
  .blog-content hr {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    height: 1px;
    margin: ${Spacing.xl}px 0;
  }
  .blog-content table {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: ${Spacing.md}px 0;
    border-collapse: collapse;
    width: 100%;
  }
  .blog-content thead {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .blog-content th {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-weight: bold;
    padding: ${Spacing.sm}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .blog-content td {
    color: ${Colors.text.secondary};
    font-family: ${FontFamily.secondary};
    padding: ${Spacing.sm}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .blog-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${Spacing.md}px 0;
  }
`;

const editingStyles = `
  .blog-content-editing {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: ${Spacing.lg}px;
    background-color: rgba(255, 255, 255, 0.03);
    min-height: 300px;
  }
  .blog-content-editing:focus {
    border-color: ${Colors.brand.primary};
  }
`;

const styles = StyleSheet.create({
  contentSection: {
    paddingVertical: Spacing.xl * 2,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    paddingVertical: Spacing.xl * 2,
  },
  editBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: Spacing.xl,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.brand.primary,
  },
  editButtonText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    fontWeight: '500',
  },
  editActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  cancelButton: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cancelButtonText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  saveButton: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
    backgroundColor: Colors.brand.primary,
  },
  saveButtonText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  titleInput: {
    fontSize: Typography['2xl'] * 1.5,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xl,
    marginBottom: Spacing.xl,
    paddingBottom: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metaText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  backButton: {
    marginTop: Spacing.xl * 2,
    alignItems: 'flex-start',
  },
});

export default BlogDetailPage;
