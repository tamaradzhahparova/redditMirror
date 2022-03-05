import React from "react";

export function withKey(key?: string) {
    return <E extends Record<string, any>, T extends React.ComponentType<E>>(component: T) => 
        (props: E, index: number) =>
            React.createElement(
                component,
                {...props, key: key ? props[key] : index}
            )
  }
