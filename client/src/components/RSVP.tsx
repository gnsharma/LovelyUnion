import { useState } from 'react';
import { useInView } from '@/lib/animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const { ref, inView } = useInView(0.2);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    attending: 'yes',
    numberOfGuests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we'd normally submit to a backend API
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "RSVP Received!",
        description: "Thank you for your response. We look forward to celebrating with you!",
      });
      setFormState({
        name: '',
        email: '',
        attending: 'yes',
        numberOfGuests: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Your Response</p>
          <h2 className="font-serif text-3xl md:text-4xl text-darkGray mb-6">RSVP</h2>
          <div className="h-0.5 w-24 bg-blush mx-auto"></div>
          <p className="mt-6 max-w-xl mx-auto text-darkGray">
            Please let us know if you'll be joining us on our special day. 
            We're excited to celebrate with you!
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className={`bg-cream p-8 md:p-10 rounded-lg shadow-md opacity-0 translate-y-5 transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : ''}`}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-darkGray">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="border-gold/30 focus:border-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-darkGray">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="border-gold/30 focus:border-gold"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="attending" className="block mb-2 font-medium text-darkGray">
                    Will You Attend?
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formState.attending}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 bg-white rounded-md border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold"
                  >
                    <option value="yes">Joyfully Accept</option>
                    <option value="no">Regretfully Decline</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="numberOfGuests" className="block mb-2 font-medium text-darkGray">
                    Number of Guests
                  </label>
                  <Input
                    id="numberOfGuests"
                    name="numberOfGuests"
                    type="number"
                    min="1"
                    max="10"
                    value={formState.numberOfGuests}
                    onChange={handleChange}
                    required={formState.attending === 'yes'}
                    disabled={formState.attending === 'no'}
                    placeholder="Number of guests"
                    className="border-gold/30 focus:border-gold"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-darkGray">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share your wishes or any dietary requirements"
                  className="border-gold/30 focus:border-gold min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send RSVP'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;