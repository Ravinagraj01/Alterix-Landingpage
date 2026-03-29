import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    youtubeChannel: '',
    editingHours: '',
    biggestFrustration: '',
    wouldPay: '',
    fairPrice: '',
    email: '',
    wantCall: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Tally integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('🎉 Welcome to the waitlist! We\'ll be in touch soon.');
      setFormData({
        name: '',
        youtubeChannel: '',
        editingHours: '',
        biggestFrustration: '',
        wouldPay: '',
        fairPrice: '',
        email: '',
        wantCall: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-6">
      <Toaster position="top-right" />
      
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-4"
        >
          <span className="text-neon-pink">JOIN THE WAITLIST</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Be the first to know when we launch. Early access pricing guaranteed.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-dark-gray rounded-lg p-8 border border-gray-700 neon-border"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* YouTube Channel */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                YouTube channel link (or niche if no channel yet)
              </label>
              <input
                type="url"
                name="youtubeChannel"
                value={formData.youtubeChannel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="https://youtube.com/yourchannel"
              />
            </div>

            {/* Editing Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How many hours/week do you spend editing?
              </label>
              <select
                name="editingHours"
                value={formData.editingHours}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white focus:border-neon-yellow focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="less-2">Less than 2</option>
                <option value="2-5">2–5</option>
                <option value="5-10">5–10</option>
                <option value="10+">10+</option>
              </select>
            </div>

            {/* Biggest Frustration */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What's your biggest editing frustration?
              </label>
              <textarea
                name="biggestFrustration"
                value={formData.biggestFrustration}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-yellow focus:outline-none transition-colors resize-none"
                placeholder="Tell us what drives you crazy..."
              />
            </div>

            {/* Would Pay */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Would you pay for a tool that cuts your edit time by 70%?
              </label>
              <select
                name="wouldPay"
                value={formData.wouldPay}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white focus:border-neon-yellow focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, definitely</option>
                <option value="maybe">Maybe, depends on price</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Fair Price */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                If yes — what would feel fair per month?
              </label>
              <select
                name="fairPrice"
                value={formData.fairPrice}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white focus:border-neon-yellow focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="$10">$10</option>
                <option value="$20">$20</option>
                <option value="$30">$30</option>
                <option value="$50+">$50+</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* 1-on-1 Call */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Want a 1-on-1 call to share your thoughts? (optional)
              </label>
              <input
                type="text"
                name="wantCall"
                value={formData.wantCall}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-medium-gray border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="Calendly link (optional)"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full py-4 bg-neon-yellow text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'JOINING WAITLIST...' : 'JOIN THE WAITLIST →'}
            </motion.button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          This form takes 2 minutes. No spam, just updates when we're ready.
        </motion.p>
      </div>
    </section>
  );
};

export default WaitlistForm;
