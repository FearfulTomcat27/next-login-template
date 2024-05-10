import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "用户名不能为空",
  }),
  password: z.string().min(6, {
    message: "密码不能少于6个字符",
  }),
});

const LoginForm = ({ className }) => {
  const { login } = useUserStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const onSubmit = (values) => {
    login(values).then((res) => {
      toast.success(res.message);
      router.push("/");
    });
    form.reset();
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className={cn("grid gap-6", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input placeholder='请输入用户名' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='请输入密码' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} className='w-full'>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            登录
          </Button>
        </form>
      </Form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={isLoading}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : <Github />} GitHub
      </Button>
    </div>
  );
};

export default LoginForm;
