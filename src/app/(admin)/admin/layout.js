"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Tabs defaultValue="dashboard" className="w-full container max-auto ">
          <TabsList>
            <Link href={"/admin/dashboard"}>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href={"/admin/users"}>
              <TabsTrigger value="users">users</TabsTrigger>
            </Link>

            <Link href={"/admin/categories"}>
              <TabsTrigger value="categories">categories</TabsTrigger>
            </Link>
            <Link href={"/admin/subcategories"}>
              <TabsTrigger value="subCategories">subCategories</TabsTrigger>
            </Link>
            <Link href={"/admin/events"}>
              <TabsTrigger value="events">events</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="dashboard"> {children}</TabsContent>
          <TabsContent value="subCategories"> {children}</TabsContent>
          <TabsContent value="users"> {children}</TabsContent>
          <TabsContent value="categories"> {children}</TabsContent>
          <TabsContent value="events"> {children}</TabsContent>
        </Tabs>
      </body>
    </html>
  );
}
