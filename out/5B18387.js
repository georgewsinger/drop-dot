goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27958__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27959__i = 0, G__27959__a = new Array(arguments.length -  0);
while (G__27959__i < G__27959__a.length) {G__27959__a[G__27959__i] = arguments[G__27959__i + 0]; ++G__27959__i;}
  args = new cljs.core.IndexedSeq(G__27959__a,0);
} 
return G__27958__delegate.call(this,args);};
G__27958.cljs$lang$maxFixedArity = 0;
G__27958.cljs$lang$applyTo = (function (arglist__27960){
var args = cljs.core.seq(arglist__27960);
return G__27958__delegate(args);
});
G__27958.cljs$core$IFn$_invoke$arity$variadic = G__27958__delegate;
return G__27958;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27961__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27962__i = 0, G__27962__a = new Array(arguments.length -  0);
while (G__27962__i < G__27962__a.length) {G__27962__a[G__27962__i] = arguments[G__27962__i + 0]; ++G__27962__i;}
  args = new cljs.core.IndexedSeq(G__27962__a,0);
} 
return G__27961__delegate.call(this,args);};
G__27961.cljs$lang$maxFixedArity = 0;
G__27961.cljs$lang$applyTo = (function (arglist__27963){
var args = cljs.core.seq(arglist__27963);
return G__27961__delegate(args);
});
G__27961.cljs$core$IFn$_invoke$arity$variadic = G__27961__delegate;
return G__27961;
})()
;

return null;
});
