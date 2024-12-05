import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const listItems = [
        "Comprehesive eye exam",
        "Disease control",
        "Contact Lens",
        "Dry eye treatment",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex flex-col lg:flex-row">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 h-[50vh] lg:h-screen relative"
            >
                <img
                    src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    className='object-cover h-full'
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 mix-blend-multiply" />
            </motion.div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-8">
                        My <span className="text-indigo-600 dark:text-indigo-400">Practice</span>
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        We are a forward-thinking company dedicated to pushing the boundaries of innovation. Our team of experts
                        works tirelessly to develop cutting-edge solutions that address the most pressing challenges of our time.
                        With a focus on sustainability and user-centric design, we strive to create products and services that
                        not only meet but exceed the expectations of our global clientele.
                    </p>
                    <ul className="space-y-4">
                        {listItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Badge variant="outline" className="text-sm py-1 px-2">
                                    {item}
                                </Badge>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}