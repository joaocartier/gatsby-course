import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

export default function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}
