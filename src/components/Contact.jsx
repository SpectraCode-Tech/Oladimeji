import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Loading State Toast
    const loadingToast = toast.loading('Sending message...', {
      style: {
        background: '#0F172A',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.1)',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    });

    emailjs.sendForm('service_s37epmw', 'template_63kh4gi', form.current, {
        publicKey: 'UD0t6YHM8tNkV2OKP',
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            id: loadingToast,
            duration: 5000,
            iconTheme: { primary: '#6366f1', secondary: '#fff' }, // Matches primary-glow
            style: {
              background: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '16px',
              padding: '16px',
            },
          });
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send. Please try again.', {
            id: loadingToast,
            style: {
              background: '#7f1d1d',
              color: '#fff',
              borderRadius: '16px',
            },
          });
          console.log('FAILED...', error.text);
        },
      );
  };

  const contactInfo = [
    { label: 'Email', value: 'dimejirsq@yahoo.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Phone', value: '+2349077656721', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  ];

  const socials = [
    { name: 'GitHub', href: 'https://github.com/SpectraCode-Tech', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/faisal-rasaq-741269331', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'WhatsApp', href: 'https://wa.me/2349077656721', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@that_dimeji', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.18-.87 2.63-1.35 4.1-1.31.11 0 .22 0 .33.01V10.1c-1.05-.15-2.15.08-3.05.66-1.25.77-1.95 2.19-1.83 3.65.06 1.15.65 2.22 1.58 2.91.95.73 2.18.91 3.33.53 1.14-.35 2.03-1.32 2.33-2.47.16-.54.21-1.1.19-1.66-.02-4.56-.02-9.12-.02-13.68-.01-.01 0-.03-.01-.03z' },
    { name: 'X', href: 'https://x.com/dimejirsq', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
    { name: 'Instagram', href: 'https://www.instagram.com/that_dimeji/?hl=en', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07s-3.585-.015-4.85-.074c-1.17-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-3/5">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight italic">
              Get in <span className="text-slate-500 not-italic">touch</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md font-medium">
              Have a question or want to work together? Leave a message and I'll get back to you soon.
            </p>

            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="Name" 
                  className="w-full bg-card-bg/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-glow/50 transition-all placeholder:text-slate-600"
                />
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="Email" 
                  className="w-full bg-card-bg/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-glow/50 transition-all placeholder:text-slate-600"
                />
              </div>
              <textarea 
                name="message"
                required
                rows="6" 
                placeholder="Your Message" 
                className="w-full bg-card-bg/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-glow/50 transition-all resize-none placeholder:text-slate-600"
              />
              <button type="submit" className="w-full cursor-pointer md:w-max px-14 py-4 bg-white text-black font-black rounded-2xl hover:bg-primary-glow hover:text-white transition-all duration-500 uppercase text-[10px] tracking-[0.3em] active:scale-95">
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col space-y-16 pt-2 lg:mt-12">
            <div className="space-y-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="group cursor-pointer">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4">{info.label}</h4>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-primary-glow/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={info.icon} />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-slate-200 tracking-tight break-all md:break-normal">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-6">Social Presence</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-glow/50 hover:bg-primary-glow/5 transition-all duration-500 group"
                  >
                    <svg className="w-6 h-6 fill-current transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;