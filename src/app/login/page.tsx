import { AuthForm } from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <AuthForm mode="login" />
    </div>
  );
}
