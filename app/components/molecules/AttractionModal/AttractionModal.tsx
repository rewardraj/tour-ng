import { FC, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  Grid,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { TouristAttraction } from "@app/shared/data/allData";

interface AttractionModalProps {
  attraction: TouristAttraction;
  onClose: () => void;
}

const AttractionModal: FC<AttractionModalProps> = ({ attraction, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();

  const images = attraction.images;

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby="attraction-modal"
      aria-describedby="attraction-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
          width: { xs: "95%", sm: "85%", md: "60%", lg: "50%" },
          maxHeight: "90vh",
          overflow: "hidden",
          outline: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: `0 20px 50px ${alpha(theme.palette.primary.main, 0.3)}`,
          },
        }}
      >
        {/* Close Button */}
        {/* <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            bgcolor: alpha(theme.palette.grey[300], 0.5),
            color: theme.palette.text.primary,
            "&:hover": {
              bgcolor: alpha(theme.palette.grey[400], 0.7),
            },
          }}
        >
          <Close />
        </IconButton> */}

        {/* Image Carousel */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          {images.length > 0 ? (
            <>
              <Box
                component="img"
                src={images[currentImageIndex]}
                alt={`${attraction.name} view ${currentImageIndex + 1}`}
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 400, md: 450 },
                  objectFit: "cover",
                  filter: "brightness(0.9)",
                  transition: "all 0.5s ease",
                }}
              />
              {images.length > 1 && (
                <>
                  <IconButton
                    onClick={handlePrevious}
                    aria-label="Previous image"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 16,
                      transform: "translateY(-50%)",
                      bgcolor: alpha(theme.palette.primary.main, 0.7),
                      color: "white",
                      "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    aria-label="Next image"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 16,
                      transform: "translateY(-50%)",
                      bgcolor: alpha(theme.palette.primary.main, 0.7),
                      color: "white",
                      "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    <ChevronRight />
                  </IconButton>
                </>
              )}
            </>
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                py: 4,
                color: theme.palette.text.secondary,
              }}
            >
              No images available for this attraction
            </Typography>
          )}
        </Box>

        {/* Content */}
        <Box sx={{ p: { xs: 2, sm: 4 } }}>
          <Typography
            variant="h4"
            id="attraction-modal"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: theme.palette.primary.main,
              letterSpacing: -0.5,
            }}
          >
            {attraction.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            id="attraction-modal-description"
            paragraph
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            {attraction.description}
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            {[
              { label: "Attraction Type", value: attraction.type },
              { label: "City", value: attraction.location.city },
              { label: "Place", value: attraction.location.spot },
            ].map(({ label, value }) => (
              <Grid item xs={12} sm={4} key={label}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ mb: 0.5, fontWeight: 600 }}
                >
                  {label}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {value}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            fullWidth
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              width: "auto",
              fontWeight: 600,
              boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 12px 20px ${alpha(
                  theme.palette.primary.main,
                  0.4
                )}`,
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AttractionModal;
