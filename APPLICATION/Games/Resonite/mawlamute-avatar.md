# Mawlamute Avatar

> [!Important]
> This is a WIP.

<!-- markdownlint-disable MD033 -->

<!-- panels:start -->

<!-- div:title-panel -->

## Credits

<!-- div:right-panel -->

`v1.0-R1.0`

- Avatar Import: **Axiom Wolf**
- Coordination and Docs: **Phil**

<!-- div:left-panel -->

[CommunityPortNotice](winterbold-avatar.md#CommunityPortNotice ':include')

<!-- panels:end -->

## Use Guide

### Basic Setup

To start using the Mawlamute right away without any customizations, hold the "Finish Avatar" button. Thats it!

### Custom Textures

1. Import your textures to Resonite by dragging and dropping the files into the game.
1. Switch to the "Textures"-tab
1. Hold the texture with one hand
1. Primary click on the texture you want to replace

On Desktop, you need to laser-grab with holding left-click and right-click on the texture you want to replace.

### Core Add-On

The Mawlamute Core add-on comes pre-installed with the avatar and is fully customizable through the context menu. This allows for expressions, based on the VRC hand-gestures and community made addons.

### Improving Avatar Performance

- You can improve performance by disabling addon-features are you don't need.
- It is recommended for knowledgeable users to bake any unused blendshapes to greatly reduce load times for the avatar. The body's mesh is located in `/CenteredRoot/Renderers/Body`. Keep in mind that this may limit the ability to add clothing options in the future.
- By default textures have a 4K resolution, and can be downscaled through the Asset Optimization Wizard, available from the dev tool. This saves on inventory space and reduces memory usage.

<!-- panels:start -->

<!-- div:title-panel -->

### Controls

<!-- div:left-panel -->

#### VR Controls

![Mawlamute VR Controls](_media/mawlamute-expression-sheet.png)

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

This avatar follows the [Avatar Standard](https://wiki.resonite.com/Avatar_standard) (up to spec as of November 2026).

Most expression and personalization functionality is self-contained in the Core Add-On. It is possible to uninstall and re-install this system at any time. The avatar contains several DynamicValueVariableDrivers that listen to values set by this module.

### Non-Standardized variables


### Avatar Specific Variables

These blendshapes trigger custom effects on the avatar. These variables are only provided by the core addon. However, variables marked with `◂` are listened to as drivers.

#### Tail


#### Toes


#### Ears


#### Headpats


#### Eyes


#### Expressions


#### Tongue


#### Body


#### Clothing


### Blendshapes

Only a subset of Blendshapes are available as dynamic variables. The rest can be either reserved or baked for performance. Keep in mind that some may be used in the future for clothes compatibility.

## TEMP LIST

> [!Note]
> This list will be ordered into categories later. It is also still missing the write back (`◂`) notice.

- <span class="type type-bool">bool</span> `CheekSquish.Enabled`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Boots`
- <span class="type type-string">string</span> `Clothing.TechTrash.Boots`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Jacket`
- <span class="type type-string">string</span> `Clothing.TechTrash.Jacket`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Leggings`
- <span class="type type-string">string</span> `Clothing.TechTrash.Leggings`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Shorts`
- <span class="type type-string">string</span> `Clothing.TechTrash.Shorts`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Stockings`
- <span class="type type-string">string</span> `Clothing.TechTrash.Stockings`
- <span class="type type-bool">bool</span> `Clothing.TechTrash.Undershirt`
- <span class="type type-string">string</span> `Clothing.TechTrash.Undershirt`
- <span class="type type-bool">bool</span> `DynamicBoneChain.Breasts.Enabled`
- <span class="type type-bool">bool</span> `DynamicBoneChain.Butt.Enabled`
- <span class="type type-bool">bool</span> `DynamicBoneChain.Toes.Enabled`
- <span class="type type-bool">bool</span> `DynamicBoneChain.Tummy.Enabled`
- <span class="type type-float">float</span> `Emote.Ear.Back.L`
- <span class="type type-float">float</span> `Emote.Ear.Back.R`
- <span class="type type-float">float</span> `Emote.Ear.Deflect.L`
- <span class="type type-float">float</span> `Emote.Ear.Deflect.R`
- <span class="type type-float">float</span> `Emote.Tongue`
- <span class="type type-bool">bool</span> `Expression.Active`
- <span class="type type-float">float?</span> `Expression.LightconeTarget`
- <span class="type type-bool">bool</span> `Expressions.DoOpenHandExpressions`
- <span class="type type-bool">bool</span> `Expressions.Eyes.Enable`
- <span class="type type-bool">bool</span> `Expressions.Eyes.Lock`
- <span class="type type-bool">bool</span> `Expressions.Mouth.DoOpenHandExpressions`
- <span class="type type-bool">bool</span> `Expressions.Mouth.Enable`
- <span class="type type-bool">bool</span> `Expressions.Mouth.Lock`
- <span class="type type-bool">bool</span> `EyeManager.DisableBlinking`
- <span class="type type-float">float</span> `EyeManager.EyeCloseOverride.Left`
- <span class="type type-float">float</span> `EyeManager.EyeCloseOverride.Right`
- <span class="type type-float">float</span> `EyeManager.EyesClosed.Left.Result`
- <span class="type type-float">float</span> `EyeManager.EyesClosed.Right.Result`
- <span class="type type-bool">bool</span> `EyePoke.Enabled`
- <span class="type type-bool">bool</span> `Face.Blinking`
- <span class="type type-bool">bool</span> `FT.LongTongue`
- <span class="type type-byte">byte</span> `HandGestures.Fingers.Left`
- <span class="type type-byte">byte</span> `HandGestures.Fingers.Right`
- <span class="type type-int">int</span> `HandGestures.Gesture.Left`
- <span class="type type-int">int</span> `HandGestures.Gesture.Right`
- <span class="type type-bool">bool</span> `Headpats.Enabled`
- <span class="type type-bool">bool</span> `Headpats.LocalTrigger`
- <span class="type type-bool">bool</span> `Headpats.Sound.Enabled`
- <span class="type type-bool">bool</span> `Headpats.Trigger`
- <span class="type type-float">float?</span> `LocomotionAnimationFeetMetrics.FootHeight`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.Body`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.Body.Away`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.Eyes`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.Fur`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.LenseCap`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.Misc`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.TailMaw`
- <span class="type type-IAssetProvider_1">IAssetProvider\`1[Material]</span> `Material.TailMaw.Away`
- <span class="type type-int">int</span> `Mawlamute.EyeType`
- <span class="type type-bool">bool</span> `Mawlamute.Face.CloseEyes`
- <span class="type type-float">float</span> `Mawlamute.Shadow.Fade`
- <span class="type type-float">float3</span> `Mawlamute.Shadow.Slicer.Normal`
- <span class="type type-float">float3</span> `Mawlamute.Shadow.Slicer.Position`
- <span class="type type-bool">bool</span> `Mawlamute.Shadow.Toggle`
- <span class="type type-float">float</span> `Puppet.Ear.Back.L`
- <span class="type type-float">float</span> `Puppet.Ear.Back.R`
- <span class="type type-float">float</span> `Puppet.Ear.Deflect.L`
- <span class="type type-float">float</span> `Puppet.Ear.Deflect.R`
- <span class="type type-bool">bool</span> `Puppet.Ear.Enabled`
- <span class="type type-bool">bool</span> `Puppet.Toes.Enabled`
- <span class="type type-float">float</span> `Puppet.Toes.L`
- <span class="type type-float">float</span> `Puppet.Toes.R`
- <span class="type type-float">float</span> `Puppet.Tongue`
- <span class="type type-float">float</span> `Puppet.Tongue.Slider`
- <span class="type type-bool">bool</span> `Pyhsics.FloorCollider`
- <span class="type type-slot">slot</span> `RadialSliderMenu.Root`
- <span class="type type-SkinnedMeshRenderer">SkinnedMeshRenderer</span> `Renderer.Body`
- <span class="type type-bool">bool</span> `Renderer.Body.Enabled`
- <span class="type type-SkinnedMeshRenderer">SkinnedMeshRenderer</span> `Renderer.LightCone`
- <span class="type type-float">float</span> `Renderer.LightCone.Brightness`
- <span class="type type-bool">bool</span> `Renderer.LightCone.Enabled`
- <span class="type type-SkinnedMeshRenderer">SkinnedMeshRenderer</span> `Renderer.TailMaw`
- <span class="type type-bool">bool</span> `Renderer.TailMaw.Enabled`
- <span class="type type-SkinnedMeshRenderer">SkinnedMeshRenderer</span> `Renderer.TechTrash`
- <span class="type type-bool">bool</span> `Renderer.TechTrash.Enabled`
- <span class="type type-IDynamicBoneCollider">IDynamicBoneCollider</span> `Tail.FloorCollider`
- <span class="type type-int">int</span> `Tail.Pose`
- <span class="type type-float">float</span> `Tail.WagSpeed`
- <span class="type type-bool">bool</span> `TailMaw.Bite`
- <span class="type type-bool">bool</span> `TailMaw.Bite.Interactions`
- <span class="type type-bool">bool</span> `Tailmaw.BreathFX`
- <span class="type type-bool">bool</span> `Tailmaw.Drool`
- <span class="type type-bool">bool</span> `Tailmaw.Expressions`
- <span class="type type-bool">bool</span> `Tailmaw.FaceTracking`
- <span class="type type-bool">bool</span> `Tailmaw.Gestures.JawOpen`
- <span class="type type-bool">bool</span> `Tailmaw.Gestures.TongueOut`
- <span class="type type-bool">bool</span> `TailMaw.HeadPat`
- <span class="type type-bool">bool</span> `Tailmaw.HeadTracking`
- <span class="type type-bool">bool</span> `Tailmaw.IdleAnimations`
- <span class="type type-int">int</span> `TailMaw.InteractionAnimation`
- <span class="type type-bool">bool</span> `TailMaw.Interactions`
- <span class="type type-int">int</span> `TailMaw.InteractionState`
- <span class="type type-bool">bool</span> `Tailmaw.JawOpen`
- <span class="type type-int">int</span> `TailMaw.Mood`
- <span class="type type-bool">bool</span> `Tailmaw.Mute`
- <span class="type type-bool">bool</span> `Tailmaw.TongueOut`
- <span class="type type-bool">bool</span> `Tailmaw.Visemes`

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
  .type-slot { --type-color: 90, 100%; }
  .type-IAssetProvider_1 { --type-color: 284, 48%; }
  .type-byte { --type-color: 150, 100%; }
  .type-IDynamicBoneCollider { --type-color: 283, 44%; }
  .type-SkinnedMeshRenderer { --type-color: 310, 100%; }
</style>
