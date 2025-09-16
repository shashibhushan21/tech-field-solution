'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { handleOptimizeContent } from '@/app/content-optimizer/actions';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function ContentOptimizerClient() {
  const [content, setContent] = useState('');
  const [style, setStyle] = useState('more concise');
  const [optimizedContent, setOptimizedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some content to optimize.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setOptimizedContent('');

    const result = await handleOptimizeContent({ content, style });

    if (result.success && result.data) {
      setOptimizedContent(result.data.optimizedContent);
    } else {
      toast({
        title: 'Optimization Failed',
        description: result.error || 'An unknown error occurred.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Content Input</CardTitle>
          <CardDescription>
            Enter the text you want to optimize and select the desired style.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Textarea
                placeholder="Paste your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="md:col-span-3 min-h-[200px]"
                disabled={isLoading}
              />
              <div className="space-y-4">
                <Select value={style} onValueChange={setStyle} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="more concise">More Concise</SelectItem>
                    <SelectItem value="more professional">More Professional</SelectItem>
                    <SelectItem value="more casual">More Casual</SelectItem>
                    <SelectItem value="more descriptive">More Descriptive</SelectItem>
                    <SelectItem value="bolder">Bolder</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  <Wand2 className="mr-2 h-4 w-4" />
                  {isLoading ? 'Optimizing...' : 'Optimize'}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {(isLoading || optimizedContent) && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Optimized Result</CardTitle>
            <CardDescription>Here is the AI-suggested version of your content.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <div className="prose dark:prose-invert max-w-none p-4 bg-secondary rounded-md">
                <p>{optimizedContent}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
      )}
      
      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-card/30 rounded-xl border">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-semibold mb-2">Smart Optimization</h3>
          <p className="text-sm text-muted-foreground">AI analyzes your content and suggests improvements for better engagement.</p>
        </div>
        <div className="text-center p-6 bg-card/30 rounded-xl border">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="font-semibold mb-2">Instant Results</h3>
          <p className="text-sm text-muted-foreground">Get optimized content in seconds, not hours of manual editing.</p>
        </div>
        <div className="text-center p-6 bg-card/30 rounded-xl border">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="font-semibold mb-2">Multiple Styles</h3>
          <p className="text-sm text-muted-foreground">Choose from various optimization styles to match your brand voice.</p>
        </div>
      </div>
    </div>
  );
}
