'use client';

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  widthClass?: string;
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  className = '',
  widthClass = 'w-[240px] sm:w-[260px] lg:w-[280px]',
}: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] blur-2xl opacity-40 scale-95" aria-hidden="true" />
      <div
        className={`relative mx-auto bg-gray-900 border-[8px] border-gray-900 rounded-[2.5rem] shadow-2xl shadow-black/30 overflow-hidden ${widthClass}`}
      >
        {/* Native img avoids next/image SSR/client markup differences */}
        <img
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-auto block"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}
