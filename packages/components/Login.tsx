import Link from "next/link";

import { Button } from "@/packages/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/packages/components/ui/card";
import { Input } from "@/packages/components/ui/input";
import { Label } from "@/packages/components/ui/label";
import { Icons } from "./ui/icons";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export const iframeHeight = "600px";

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full flex gap-2 items-center justify-center"
          >
            Login with Google <Icons.google className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
