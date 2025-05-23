import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { Star, Check, Minus, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ComparisonSection from '../components/ComparisonSection';
import OrderForm from '../components/OrderForm';
import TrustInfo from '../components/TrustInfo';

const ProductDetails: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const images = [
    'https://i.postimg.cc/GtqMqTJQ/temp-Imageak-Uit-Q.avif',
    'https://i.postimg.cc/v8zSQCFV/temp-Image-I9i-Qog.avif',
    'https://i.postimg.cc/m212xYJK/temp-Imageoc-FKDy.avif'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    addItem({
      id: 'flowfix-magnetic-nasal-strip',
      name: 'FlowFix™ Magnetic Nasal Strip',
      price: 1199,
      quantity,
      image: images[0]
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-matte-black pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 py-12">
              {/* Image Gallery */}
              <div className="lg:w-1/2">
                <div className="relative aspect-[16/9] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  {/* Images */}
                  {images.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`FlowFix™ Magnetic Nasal Strip - View ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentImage === index 
                            ? 'bg-white scale-110' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  {/* Title & Price */}
                  <h1 className="text-4xl font-bold text-white mb-4">FlowFix™ Magnetic Nasal Strip</h1>
                  <div className="mb-6">
                    <span className="text-lg text-gray-400 line-through mr-3">₹1,499</span>
                    <span className="text-3xl font-bold text-white">₹1,199</span>
                  </div>

                  {/* Product Description */}
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Experience revolutionary magnetic nasal technology that gently expands your nasal passages for optimal breathing. Perfect for better sleep, enhanced athletic performance, and overall breathing comfort.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-royal-blue-400" />
                        Medical-grade materials
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-royal-blue-400" />
                        Up to 58% more airflow
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-royal-blue-400" />
                        8+ hours of comfort
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={16} className="text-royal-blue-400" />
                        Reusable design
                      </li>
                    </ul>
                  </div>

                  {/* Order Form */}
                  <div className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-6">Quick Order</h2>
                    <OrderForm />
                  </div>

                  {/* Trust Info Strip */}
                  <TrustInfo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <ComparisonSection />

        {/* What's in the Box */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">What's in the Box</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="https://i.postimg.cc/kXgYDwqh/temp-Image-Ygmi3-Q.avif"
                  alt="FlowFix™ components"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-royal-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">4 Magnetic Nose Clips</h3>
                    <p className="text-gray-300">S2, M1, M2, L1 sizes for perfect fit</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-royal-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">15 Pairs of Adhesive Tabs</h3>
                    <p className="text-gray-300">Medical-grade, skin-friendly adhesive</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-royal-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1 Magnetic Tool</h3>
                    <p className="text-gray-300">For easy application and removal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Product Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Enhanced airflow during sleep and activity",
                "Reduces snoring, improves oxygen intake",
                "Helps boost performance and focus",
                "Easy to use, reusable, and non-irritating"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-royal-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-royal-blue-400" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Rahul M.",
                  review: "Completely eliminated my snoring. My wife is much happier now!",
                  rating: 5
                },
                {
                  name: "Priya S.",
                  review: "Great for workouts. I can breathe so much better during runs.",
                  rating: 5
                },
                {
                  name: "Amit K.",
                  review: "Finally getting quality sleep. Worth every rupee!",
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-royal-blue-900/50 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {review.name[0]}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{review.name}</h3>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetails;