import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>© 2026 Grant Hickman. All Rights Reserved.</p>
        <div className="space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/granthickman33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://gitlab.com/g.hickman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitLab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
