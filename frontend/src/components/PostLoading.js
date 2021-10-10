import React from "react";

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
        return (
            <p styles={{ fontSize: "25px" }}>
                We are waiting for the data to load!...
            </p>
        );
	};
}

export default PostLoading;
