goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15542__i = 0, G__15542__a = new Array(arguments.length -  0);
while (G__15542__i < G__15542__a.length) {G__15542__a[G__15542__i] = arguments[G__15542__i + 0]; ++G__15542__i;}
  args = new cljs.core.IndexedSeq(G__15542__a,0);
} 
return G__15541__delegate.call(this,args);};
G__15541.cljs$lang$maxFixedArity = 0;
G__15541.cljs$lang$applyTo = (function (arglist__15543){
var args = cljs.core.seq(arglist__15543);
return G__15541__delegate(args);
});
G__15541.cljs$core$IFn$_invoke$arity$variadic = G__15541__delegate;
return G__15541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15545__i = 0, G__15545__a = new Array(arguments.length -  0);
while (G__15545__i < G__15545__a.length) {G__15545__a[G__15545__i] = arguments[G__15545__i + 0]; ++G__15545__i;}
  args = new cljs.core.IndexedSeq(G__15545__a,0);
} 
return G__15544__delegate.call(this,args);};
G__15544.cljs$lang$maxFixedArity = 0;
G__15544.cljs$lang$applyTo = (function (arglist__15546){
var args = cljs.core.seq(arglist__15546);
return G__15544__delegate(args);
});
G__15544.cljs$core$IFn$_invoke$arity$variadic = G__15544__delegate;
return G__15544;
})()
;

return null;
});
