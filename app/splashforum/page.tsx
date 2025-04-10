import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface Props {
    content: string;
}

export default function SplashForumPage({ params }: { params: { page: string } }) {
    const filePath = path.join(process.cwd(), 'content/splashforum', 'index.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);

    return (
        <div className="lg:max-w-[90vw] mx-auto px-2">
            <div className="markdown-container">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};
