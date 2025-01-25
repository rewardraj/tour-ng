import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
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
import { ActivityTypes, TouristAttraction } from "@app/shared/data/allData";

interface AttractionModalProps {
  data: TouristAttraction | ActivityTypes | null;
  type: "attraction" | "activity";
  onClose: () => void;
}

const AttractionModal: FC<AttractionModalProps> = ({ data, type, onClose }) => {
  const { t } = useTranslation();
  const attraction =
    type === "attraction"
      ? (data as TouristAttraction)
      : (data as ActivityTypes);
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
                      background: `var(--color-background-light)`,
                      border: "1px solid #fff",
                      borderRadius: `var(--border-radius-small)`,
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
                      background: `var(--color-background-light)`,
                      borderRadius: `var(--border-radius-small)`,
                      border: "1px solid #fff",
                      right: 16,
                      transform: "translateY(-50%)",
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
                color: theme.palette.text.primary,
              }}
            >
              {t("modal.details.noImages")}
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
              color: theme.palette.common.black,
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
            {(type === "attraction"
              ? [
                  {
                    label: "Attraction Type",
                    value: (attraction as TouristAttraction).type,
                  },
                  {
                    label: "City",
                    value: (attraction as TouristAttraction).location.city,
                  },
                  {
                    label: "Place",
                    value: (attraction as TouristAttraction).location.spot,
                  },
                ]
              : [
                  {
                    label: "Category",
                    value: (attraction as ActivityTypes).category,
                  },
                  { label: "City", value: (attraction as ActivityTypes).city },
                  {
                    label: "Duration",
                    value: (attraction as ActivityTypes).duration,
                  },
                ]
            ).map(({ label, value }) => (
              <Grid item xs={12} sm={4} key={label}>
                <Typography
                  variant="subtitle2"
                  color="dark"
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
              textTransform: "none",
              background: `var(--color-background-light)`,
              borderRadius: `var(--border-radius-small)`,
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
            {t("modal.close")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AttractionModal;
