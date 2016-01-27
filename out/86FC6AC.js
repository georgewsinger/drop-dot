goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__360961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__360961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__360962__i = 0, G__360962__a = new Array(arguments.length -  0);
while (G__360962__i < G__360962__a.length) {G__360962__a[G__360962__i] = arguments[G__360962__i + 0]; ++G__360962__i;}
  args = new cljs.core.IndexedSeq(G__360962__a,0);
} 
return G__360961__delegate.call(this,args);};
G__360961.cljs$lang$maxFixedArity = 0;
G__360961.cljs$lang$applyTo = (function (arglist__360963){
var args = cljs.core.seq(arglist__360963);
return G__360961__delegate(args);
});
G__360961.cljs$core$IFn$_invoke$arity$variadic = G__360961__delegate;
return G__360961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__360964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__360964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__360965__i = 0, G__360965__a = new Array(arguments.length -  0);
while (G__360965__i < G__360965__a.length) {G__360965__a[G__360965__i] = arguments[G__360965__i + 0]; ++G__360965__i;}
  args = new cljs.core.IndexedSeq(G__360965__a,0);
} 
return G__360964__delegate.call(this,args);};
G__360964.cljs$lang$maxFixedArity = 0;
G__360964.cljs$lang$applyTo = (function (arglist__360966){
var args = cljs.core.seq(arglist__360966);
return G__360964__delegate(args);
});
G__360964.cljs$core$IFn$_invoke$arity$variadic = G__360964__delegate;
return G__360964;
})()
;

return null;
});
