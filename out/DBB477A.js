goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__273961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__273961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273962__i = 0, G__273962__a = new Array(arguments.length -  0);
while (G__273962__i < G__273962__a.length) {G__273962__a[G__273962__i] = arguments[G__273962__i + 0]; ++G__273962__i;}
  args = new cljs.core.IndexedSeq(G__273962__a,0);
} 
return G__273961__delegate.call(this,args);};
G__273961.cljs$lang$maxFixedArity = 0;
G__273961.cljs$lang$applyTo = (function (arglist__273963){
var args = cljs.core.seq(arglist__273963);
return G__273961__delegate(args);
});
G__273961.cljs$core$IFn$_invoke$arity$variadic = G__273961__delegate;
return G__273961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__273964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__273964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273965__i = 0, G__273965__a = new Array(arguments.length -  0);
while (G__273965__i < G__273965__a.length) {G__273965__a[G__273965__i] = arguments[G__273965__i + 0]; ++G__273965__i;}
  args = new cljs.core.IndexedSeq(G__273965__a,0);
} 
return G__273964__delegate.call(this,args);};
G__273964.cljs$lang$maxFixedArity = 0;
G__273964.cljs$lang$applyTo = (function (arglist__273966){
var args = cljs.core.seq(arglist__273966);
return G__273964__delegate(args);
});
G__273964.cljs$core$IFn$_invoke$arity$variadic = G__273964__delegate;
return G__273964;
})()
;

return null;
});
