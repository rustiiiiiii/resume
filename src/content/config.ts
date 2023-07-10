import { z, defineCollection } from "astro:content";

const social = z.object({
    uname: z.string(),
    url: z.string(),
});

const url = z.object({
    name: z.string(),
    link: z.string(),
});

const resumeCollection = defineCollection({
    type: "data", // v2.5.0 and later
    schema: z.object({
        bio: z.object({
            name: z.string(),
            roll_number: z.number(),
            email: z.string(),
            github: social,
            linkedin: social,
            dob: z.string(),
            website: url,
            last_updated: z.string(),
        }),
        education: z.array(
            z.object({
                institution: z.string(),
                degree: z.string(),
                duration: z.string(),
                grade: z.string(),
                note: z.string().optional(),
            })
        ),
        skills: z.array(
            z.object({
                title: z.string(),
                value: z.string(),
            })
        ),
        work_experience: z.array(
            z.object({
                title: z.string(),
                company: z.string(),
                subtitle: z.string(),
                duration: z.string(),
                tech_stack: z.string(),
                bullets: z.array(z.string()),
                links: z.array(url).optional(),
            })
        ),
        projects: z.array(
            z.object({
                title: z.string(),
                subtitle: z.string(),
                duration: z.string(),
                team_size: z.number(),
                links: z.array(url),
                bullets: z.array(z.string()),
                note: z.string().optional(),
                tech_stack: z.string(),
            })
        ),
        leadership: z.array(
            z.object({
                position: z.string(),
                duration: z.string(),
            })
        ),
        achievements: z.array(z.string()),
        interests: z.array(z.string()),
        volunteer: z.array(
            z.object({
                position: z.string(),
                place: z.string(),
                duration: z.string(),
                desc: z.string(),
            })
        ),
    }),
});

export const collections = {
    resume: resumeCollection,
};
