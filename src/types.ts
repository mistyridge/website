interface BlogNode {
    slug?: string | null;
}

interface EventNode {
    slug?: string | null;
}

export interface BlogQueryResult {
    allContentfulBlog: {
        edges: {
            node: BlogNode;
        }[];
    };
}

export interface EventQueryResult {
    allContentfulEvents: {
        edges: {
            node: EventNode;
        }[];
    };
}
