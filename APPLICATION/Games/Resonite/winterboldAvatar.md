<!-- markdownlint-disable MD033 -->

# Winterbold Avatar

<!-- panels:start -->

<!-- div:title-panel -->

## Credits

<!-- div:right-panel -->

`v1.2.0-R1.0`

- Avatar Import: **Axiom Wolf**
- Coordination and Docs-Refactor: **Phil**

<!-- div:left-panel -->

> [!Note]
> This is a community port to Resonite. **Do not contact Guusy for technical support**, as they will be unable to help you with your issue. If you find any bugs or inconsistencies, please reach out to AxiomWolf(`@unskilledwolf`) on Discord.

<!-- panels:end -->

## Use Guide

### Basic Setup

To start using the Winterbold right away without any customizations, hold the "Finish Avatar" button. Thats it!

### Custom Textures

1. Import your textures to Resonite by dragging and dropping the files into the game.
1. Switch to the "Textures"-tab
1. Hold the texture with one hand
1. Primary click on the texture you want to replace

On Desktop, you need to laser-grab with holding left-click and right-click on the texture you want to replace.

### Core Add-On

The Winterbold Core add-on comes pre-installed with the avatar and is fully customizable through the context menu. This allows for expressions, based on the VRC hand-gestures and community made addons.

### Improving Avatar Performance

- You can improve performance by disabling addon-features are you don't need.
- It is recommended for knowledgeable users to bake any unused blendshapes to greatly reduce load times for the avatar. The body's mesh is located in `/CenteredRoot/Renderers/Body`. Keep in mind that this may limit the ability to add clothing options in the future.
- By default textures have a 4K resolution, and can be downscaled through the Asset Optimization Wizard, available from the dev tool. This saves on inventory space and reduces memory usage.

<!-- panels:start -->

<!-- div:title-panel -->

### Controls

<!-- div:left-panel -->

#### VR Controls

![Winterbold VR Controls](_media/winterbold-expressions.png)

<!-- div:right-panel -->

#### Desktop controls

- <kbd>Keypad0</kbd>: Eyes Wide
- <kbd>Keypad1</kbd>: Eyes Happy (Closed)
- <kbd>Keypad2</kbd>: Wink
- <kbd>Keypad3</kbd>: Eyes Sad
- <kbd>Keypad4</kbd>: Eyes Closed
- <kbd>Keypad5</kbd>: -
- <kbd>Keypad6</kbd>: Eyes Angry
- <kbd>Keypad7</kbd>: Mouth Open
- <kbd>Keypad8</kbd>: Tongue Out
- <kbd>Keypad9</kbd>: Smile
- <kbd>KeypadDivide</kbd>: Open Smile
- <kbd>KeypadMultiply</kbd>: Cheek Puff
- <kbd>KeypadMinus</kbd>: -
- <kbd>KeypadPlus</kbd>: Frown

<!-- panels:end -->

## Technical Documentation

This avatar follows the [Avatar Standard](https://wiki.resonite.com/Avatar_standard) (up to spec as of January 2026).

Most expression and personalization functionality is self-contained in the Core Add-On. It is possible to uninstall and re-install this system at any time. The avatar contains several DynamicValueVariableDrivers that listen to values set by this module.

### Non-Standardized variables

To overwrite an eye to open in the EyeManager, use the following variables. Using these instead of Blendshapes fixes for "double blinking" where multiple eyes closed blendshapes are active at once.

- <span class="type type-float">float</span> `Avatar/EyeManager.EyeCloseOverride.Left`
- <span class="type type-float">float</span> `Avatar/EyeManager.EyeCloseOverride.Right`
- <span class="type type-bool">bool</span> `Avatar/EyeManager.DisableBlinking`
- <span class="type type-string">string</span> `Avatar/version`

### Avatar Specific Variables

These blendshapes trigger custom effects on the avatar. These variables are only provided by the core addon. However, variables marked with `◂` are listened to as drivers.

#### Tail

- <span class="type type-float">float</span> `Avatar/Tail.WagSpeed`
- <span class="type type-float">float</span> `Avatar/Tail.Puppet` The direction is is being dragged
- <span class="type type-bool">bool</span> `Avatar/Tail.Puppet` If puppeting is enabled
- ◂ <span class="type type-floatQ">floatQ</span> `Avatar/Tail.Rotation`

#### Toes

- ◂ <span class="type type-float">float</span> `Avatar/Toes.Curl.Left`
- ◂ <span class="type type-float">float</span> `Avatar/Toes.Curl.Right`
- <span class="type type-bool">bool</span> `Avatar/Toes.Puppet` If puppeting is enabled

#### Ears

- <span class="type type-bool">bool</span> `Avatar/Ears.Puppet`
- <span class="type type-float">float</span> `Avatar/Ears.Deflect` The total target sideways movement of the ears
- <span class="type type-float">float</span> `Avatar/Ears.Back` The total target backwards movement of the ears
- ◂ <span class="type type-float">float</span> `Avatar/Ears.Deflect.Left` The actual sideways movement on the left side
- ◂ <span class="type type-float">float</span> `Avatar/Ears.Back.Left` The actual backwards movement on the left side
- ◂ <span class="type type-float">float</span> `Avatar/Ears.Deflect.Right` The actual sideways movement on the right side
- ◂ <span class="type type-float">float</span> `Avatar/Ears.Back.Right`
  - The actual backwards movement on the right side. The ear directions also have an overwrite variant that is driven by the expression manager. The is combined with the total values and then sent back to the avatar by the sided values.

#### Headpats

- <span class="type type-bool">bool</span> `Avatar/Headpats.LocalTrigger` If the local user is triggering the headpats
- <span class="type type-bool">bool</span> `Avatar/Headpats.Sound.Enabled`
- <span class="type type-bool">bool</span> `Avatar/Headpats.Trigger` If any user is headpatting
- <span class="type type-bool">bool</span> `Avatar/Headpats.Enabled` If the headpats are enabled

#### Eyes

- <span class="type type-bool">bool</span> `Avatar/EyePoking.Enabled`
- <span class="type type-int">int</span> `Avatar/Eyes.Pupil.Type`
- <span class="type type-bool">bool</span> `Avatar/Eyes.DisableBlinking` If blinking is toggled off on the avatar (combined with expressions and set to the EyeManager's variable)

#### Expressions

- <span class="type type-bool">bool</span> `Avatar/Expressions.Locked.Mouth`
- <span class="type type-bool">bool</span> `Avatar/Expressions.Locked.Eyes`
- <span class="type type-bool">bool</span> `Avatar/Expressions.Disabled.Mouth`
- <span class="type type-bool">bool</span> `Avatar/Expressions.Disabled.Eyes`

#### Tongue

- <span class="type type-bool">bool</span>`Avatar/Tongue.Puppet`
- ◂ <span class="type type-bool">bool</span> `Avatar/Tongue.Phyiscs`
- ◂ <span class="type type-float">float</span> `Avatar/Tongue.Out`
- ◂ <span class="type type-floatQ">floatQ</span> `Avatar/Tongue.Puppet` The actual rotation of the tongue bone

#### Body

- ◂ <span class="type type-bool">bool</span> `Avatar/DynamicBoneChain.Butt.Enabled`
- ◂ <span class="type type-bool">bool</span> `Avatar/DynamicBoneChain.Breasts.Enabled`
- ◂ <span class="type type-colorX">colorX</span> `Avatar/Material.Fur.EmissiveColor`
- ◂ <span class="type type-colorX">colorX</span> `Avatar/Material.Misc.EmissiveColor`

#### Clothing

- <span class="type type-bool">bool</span> `Avatar/BaseClothes.WearMittens`

### Blendshapes

Only a subset of Blendshapes are available as dynamic variables. The rest can be either reserved or baked for performance. Keep in mind that some may be used in the future for clothes compatibility.

- <span class="type type-bool">bool</span> `Avatar/Blendshape.Body_Breasts`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Body_Feminine`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.FingerClaws_Retract`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.ToeClaws_Retract`
- <span class="type type-float">float</span> `Avatar/Blendshape.Teeth_Sharp`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Teeth_Fangs`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Eyelashes_Feminine`
- <span class="type type-float">float</span> `Avatar/Blendshape.Jaw_Open`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Smile.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Smile.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Blep`
- ~~<span class="type type-float">float</span> `Avatar/Blendshape.Tongue_Out`~~ Use Avatar/Tongue.Out for dynamic bone compatibility.
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Frown.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Frown.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Puff.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Mouth_Puff.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Raised.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Raised.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_Wide.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_Wide.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_HappyClosed.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_HappyClosed.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Lowered.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Lowered.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Cross.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Cross.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Nose_Scrunch.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Nose_Scrunch.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Small`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Drooped.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyebrows_Drooped.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_LowerRaise.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Eyes_LowerRaise.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Lips_Pull.L`
- <span class="type type-float">float</span> `Avatar/Blendshape.Lips_Pull.R`
- <span class="type type-float">float</span> `Avatar/Blendshape.Show_Tears`
- <span class="type type-float">float</span> `Avatar/Blendshape.Show_Blush`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Wide`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Slit`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Goat`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Heart`
- <span class="type type-float">float</span> `Avatar/Blendshape.Pupils_Star`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Ears_Notched`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Hide_BaseClothes_Charms`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Hide_BaseClothes_WaistHoodie`
- <span class="type type-bool">bool</span> `Avatar/Blendshape.Hide_BaseClothes_Warmers`

<style>
  .type {
    @media (prefers-color-scheme: dark) { --type-text-color: 10%; }
    padding: 1px;
    border: solid 2px;
    border-radius: 1px;
    background-color: hsl(var(--type-color), 40%);
    border-color: hsl(var(--type-color), 40%);
    color: hsl(var(--type-color), var(--type-text-color, 90%));
  }
  .type-float { --type-color: 180, 100%; }
  .type-floatQ { --type-color: 210, 100%; }
  .type-bool { --type-color: 0, 0%; }
  .type-string { --type-color: 0, 77%; }
  .type-int { --type-color: 120, 100%; }
  .type-colorX { --type-color: 30, 100%; }
</style>
