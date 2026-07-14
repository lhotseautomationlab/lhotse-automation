export default function Footer(){
  return (
    <footer className="py-8 mt-12 border-t bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© 2026 Lhotse Automation Lab. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
