import Loading from '@/components/Loading';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Loading text="Loading Mountain Yolks" size="lg" />
    </div>
  );
}

