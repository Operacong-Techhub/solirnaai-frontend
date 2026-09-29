import {
    FileText,
    Mail,
    MessageSquare,
    Monitor,
    Search,
    Shield,
    type LucideIcon,
} from "lucide-react";

export const iconMap = {
    chat: MessageSquare,
    doc: FileText,
    shield: Shield,
    screen: Monitor,
    search: Search,
    mail: Mail,
} as const satisfies Record<string, LucideIcon>;
