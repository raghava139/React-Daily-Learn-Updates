const withFancyText = (WrappedComponent) => {
    return (props) => {
        console.log('wroapped',WrappedComponent)
        console.log('wholeprops',props)
      const fancyStyle = { fontStyle: "italic", fontWeight: "bold" };
      return (
        <div style={fancyStyle}>
          <WrappedComponent {...props} name={'raghavendra'} />
        </div>
      );
    };
  };

 export default withFancyText