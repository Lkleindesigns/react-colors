// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)

// Medium devices (tablets, 768px and up)

// Large devices (desktops, 992px and up)

export default {
  up() {

  },
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    }
    return `@media(max-width: ${sizes[size]})`
  }
}