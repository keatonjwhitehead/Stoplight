import pygame
import math
def pygame_init():
    pygame.init()
    gameDisplay = pygame.display.set_mode((800,800))
    pygame.display.set_caption('Stoplight')
    clock = pygame.time.clock()
    crash = False
    while not crashed:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                crash = True

            print(event)
        pygame.display.update()

        clock.tick(60)
    pygame.quit()
quit()
