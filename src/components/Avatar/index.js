import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

export default function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}