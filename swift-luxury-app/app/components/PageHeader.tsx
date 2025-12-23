import Image from 'next/image';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <div className="relative h-[400px] overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
                        {subtitle}
                    </p>
                    <div className="mt-8 w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </div>
            </div>
        </div>
    );
}
