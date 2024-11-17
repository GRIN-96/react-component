"use client";

import { useParams } from "next/navigation";

const SubPage = () => {
    const pathname = useParams<{ slug: string }>();
    return (
        <div>
            <h1>{pathname.slug}입니다</h1>
        </div>
    );
};

export default SubPage;
