import React from "react"

export default function Loading({ loading, children }) {
  if (loading) return <h1>Cargando....</h1>

  return <>{children}</>
}
