"use client";

import { Button } from "@/packages/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/packages/components/ui/card";
import { Checkbox } from "@/packages/components/ui/checkbox";
import { Icons } from "@/packages/components/ui/icons";
import { Input } from "@/packages/components/ui/input";
import { Label } from "@/packages/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function CardsCreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleTermsChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };
  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const evaluatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[@$!%*?&]/.test(password)) strength += 25;

    // Cap strength at 100%
    setPasswordStrength(Math.min(strength, 100));
  };

  const getProgressBarColor = () => {
    if (passwordStrength <= 50) return "bg-red-500";
    if (passwordStrength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 50) return { text: "Weak", color: "text-red-500" };
    if (passwordStrength <= 75)
      return { text: "Fair", color: "text-yellow-500" };
    return { text: "Strong", color: "text-green-500" };
  };

  const passwordStrengthInfo = getPasswordStrengthText();
  return (
    <Card className="mx-auto max-w-sm w-full lg:w-1/3 mb-6">
      <CardHeader className="space-y-1 flex flex-col justify-center items-center px-6 pt-6 pb-4">
        <CardDescription>
          <Image
            src={"/exchange-logo.png"}
            alt="Backpack clone logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </CardDescription>
        <CardTitle className="text-2xl pt-4">Create an account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div className="grid gap-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="absolute top-[30px] right-0 pr-3 flex items-center text-sm leading-5"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOffIcon className="w-5" />
            ) : (
              <EyeIcon className="w-5" />
            )}
          </button>
          <div className="w-full mt-2 rounded-full h-2 bg-zinc-100 dark:bg-zinc-800">
            <div
              className={`${getProgressBarColor()} h-2 rounded-full`}
              style={{ width: `${passwordStrength}%` }}
            ></div>
          </div>
          <p className={`text-xs mt-1 ${passwordStrengthInfo.color}`}>
            {password && passwordStrengthInfo.text}
          </p>
        </div>
        <div className="grid gap-2 relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute top-[30px] right-0 pr-3 flex items-center text-sm leading-5"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <EyeOffIcon className="w-5" />
            ) : (
              <EyeIcon className="w-5" />
            )}
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!isTermsChecked}>
          Create account
        </Button>
      </CardFooter>
      <div className="items-top flex space-x-2 text-xs pl-6 pb-6">
        <Checkbox
          id="terms1"
          checked={isTermsChecked}
          onCheckedChange={handleTermsChange}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="font-medium leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
          >
            By signing up, I agree to the{" "}
            <Link
              href={"https://support.backpack.exchange/en/articles/484225"}
              className="text-blueText hover:opacity-90"
              target="_blank"
            >
              User Agreement{" "}
            </Link>
            and <br />
            <Link
              href={"https://support.backpack.exchange/en/articles/484353"}
              className="text-blueText hover:opacity-90"
              target="_black"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>
      </div>
    </Card>
  );
}
