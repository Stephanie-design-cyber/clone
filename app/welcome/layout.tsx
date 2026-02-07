import { ReactNode } from "react";
import Nav from "@/components/nav";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <section>
            {children}
            <Nav />
        </section>
    );
};

export default layout;
