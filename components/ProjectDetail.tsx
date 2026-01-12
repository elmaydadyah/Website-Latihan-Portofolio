
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = PROJECTS.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl mb-4 font-light">Project Not Found</h1>
                    <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white px-5">
            <nav className="fixed top-0 left-0 w-full z-50 px-5 pt-8 mix-blend-difference">
                <Link to="/" className="text-[14px] font-normal uppercase tracking-widest text-white hover:opacity-60 transition-opacity">
                    Close
                </Link>
            </nav>

            <main className="w-full pt-32 pb-40">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-40"
                >
                    <h1 className="text-[9vw] md:text-[6.5vw] font-light leading-[0.8] tracking-tighter uppercase whitespace-nowrap">
                        {project.title}
                    </h1>
                    <div className="mt-12 flex flex-col items-center">
                        <span className="text-[14px] uppercase tracking-widest text-white mb-2">Made For {project.client}</span>
                        <span className="text-[14px] uppercase tracking-widest text-white">Brand Design & Strategy</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-video rounded-lg overflow-hidden border border-white/5 mb-40"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="border-t border-white/10 pt-20">
                    <div className="mb-20">
                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="text-[28px] md:text-[64px] font-normal leading-[1.05] tracking-tighter text-white indent-[8vw] md:indent-[15vw]"
                            style={{ fontFamily: 'Switzer, sans-serif' }}
                        >
                            {project.description}
                        </motion.p>
                    </div>

                    {/* Scope Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 py-[10px]">
                        <div className="md:col-span-4">
                            <span className="text-[18px] font-normal text-white uppercase tracking-widest" style={{ fontFamily: 'Switzer, sans-serif' }}>(Project)</span>
                        </div>
                        <div className="md:col-span-3">
                            <span className="text-[18px] font-normal text-white tracking-widest" style={{ fontFamily: 'Switzer, sans-serif' }}>Scope</span>
                        </div>
                        <div className="md:col-span-5">
                            <p className="text-[18px] font-normal text-white leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>
                                {project.scope}
                            </p>
                        </div>
                    </div>

                    {/* Collaborators Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 py-[10px]">
                        <div className="md:col-span-4">
                        </div>
                        <div className="md:col-span-3">
                            <span className="text-[18px] font-normal text-white tracking-widest" style={{ fontFamily: 'Switzer, sans-serif' }}>Collaborators</span>
                        </div>
                        <div className="md:col-span-5">
                            <ul className="space-y-1">
                                {project.collaborators?.map((name, i) => (
                                    <li key={i} className="text-[18px] font-normal text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10" />
                </div>

                {project.extraImages && project.extraImages.length > 0 && (
                    <div className="mt-40 space-y-10 md:space-y-20">
                        {project.extraImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="w-full aspect-[16/9] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                            >
                                <img src={img} alt={`${project.title} detail ${i}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};
