goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34882__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34883__i = 0, G__34883__a = new Array(arguments.length -  0);
while (G__34883__i < G__34883__a.length) {G__34883__a[G__34883__i] = arguments[G__34883__i + 0]; ++G__34883__i;}
  args = new cljs.core.IndexedSeq(G__34883__a,0);
} 
return G__34882__delegate.call(this,args);};
G__34882.cljs$lang$maxFixedArity = 0;
G__34882.cljs$lang$applyTo = (function (arglist__34884){
var args = cljs.core.seq(arglist__34884);
return G__34882__delegate(args);
});
G__34882.cljs$core$IFn$_invoke$arity$variadic = G__34882__delegate;
return G__34882;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34885__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34886__i = 0, G__34886__a = new Array(arguments.length -  0);
while (G__34886__i < G__34886__a.length) {G__34886__a[G__34886__i] = arguments[G__34886__i + 0]; ++G__34886__i;}
  args = new cljs.core.IndexedSeq(G__34886__a,0);
} 
return G__34885__delegate.call(this,args);};
G__34885.cljs$lang$maxFixedArity = 0;
G__34885.cljs$lang$applyTo = (function (arglist__34887){
var args = cljs.core.seq(arglist__34887);
return G__34885__delegate(args);
});
G__34885.cljs$core$IFn$_invoke$arity$variadic = G__34885__delegate;
return G__34885;
})()
;

return null;
});
