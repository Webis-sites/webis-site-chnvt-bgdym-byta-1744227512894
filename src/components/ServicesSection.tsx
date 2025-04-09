'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaRulerCombined, FaHandsHelping, FaShippingFast, FaRegCreditCard, FaExchangeAlt } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-2xl overflow-hidden group"
      style={{
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.05), -5px -5px 15px rgba(255, 255, 255, 0.6)",
        background: "linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="w-16 h-16 flex items-center justify-center mb-4 text-primary rounded-full"
          style={{
            boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.5)"
          }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaTshirt />,
      title: "עיצוב אישי",
      description: "שירותי עיצוב מותאמים אישית לצרכים הייחודיים שלך, עם דגש על סגנון ונוחות"
    },
    {
      icon: <FaRulerCombined />,
      title: "תפירה מותאמת",
      description: "תפירה מקצועית לפי מידות מדויקות, להתאמה מושלמת של הבגדים לגופך"
    },
    {
      icon: <FaHandsHelping />,
      title: "ייעוץ סטיילינג",
      description: "ייעוץ אישי מסטייליסטים מקצועיים שיעזרו לך למצוא את הסגנון המושלם עבורך"
    },
    {
      icon: <FaShippingFast />,
      title: "משלוח מהיר",
      description: "שירותי משלוח מהירים ואמינים לכל רחבי הארץ, עם אפשרות למעקב אחר ההזמנה"
    },
    {
      icon: <FaRegCreditCard />,
      title: "תשלום מאובטח",
      description: "מגוון אפשרויות תשלום מאובטחות, כולל תשלומים נוחים וללא ריבית"
    },
    {
      icon: <FaExchangeAlt />,
      title: "החלפות והחזרות",
      description: "מדיניות החלפות והחזרות נוחה, המאפשרת לך לרכוש בביטחון מלא"
    }
  ];

  return (
    <section 
      className="py-16 px-4 md:px-8 overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 238, 173, 0.3))"
      }}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותים מקצועיים כדי להבטיח שתקבלו את חווית הקנייה הטובה ביותר
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button 
            className="px-8 py-3 rounded-full text-white font-medium relative overflow-hidden group"
            style={{
              background: "linear-gradient(145deg, #a98279, #8e6c65)",
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)"
            }}
          >
            <span className="relative z-10">לכל השירותים</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;