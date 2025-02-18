import React from 'react';

const ContactPages = async ({ params }) => {
  const slugs = await params;
  console.log(slugs);
  return <div>Contact slug pages</div>;
};

export default ContactPages;
