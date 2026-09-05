const PolicyContact = () => {
  return (
    <div className="bg-muted/50 rounded-lg p-6 space-y-4 border-t pt-8">
      <h3 className="text-xl font-semibold text-foreground font-inter">
        Questions About Our Policies?
      </h3>
      <p className="text-muted-foreground font-inter">
        If you have any questions about these terms and policies, please contact us at{" "}
        <a href="mailto:support@channex.io" className="text-primary hover:text-primary/80">
          support@channex.io
        </a>
        . Formal notices under the Customer Agreement must also be sent to that address.
      </p>
    </div>
  );
};

export default PolicyContact;