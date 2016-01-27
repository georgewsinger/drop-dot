goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__315653__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__315653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__315654__i = 0, G__315654__a = new Array(arguments.length -  0);
while (G__315654__i < G__315654__a.length) {G__315654__a[G__315654__i] = arguments[G__315654__i + 0]; ++G__315654__i;}
  args = new cljs.core.IndexedSeq(G__315654__a,0);
} 
return G__315653__delegate.call(this,args);};
G__315653.cljs$lang$maxFixedArity = 0;
G__315653.cljs$lang$applyTo = (function (arglist__315655){
var args = cljs.core.seq(arglist__315655);
return G__315653__delegate(args);
});
G__315653.cljs$core$IFn$_invoke$arity$variadic = G__315653__delegate;
return G__315653;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__315656__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__315656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__315657__i = 0, G__315657__a = new Array(arguments.length -  0);
while (G__315657__i < G__315657__a.length) {G__315657__a[G__315657__i] = arguments[G__315657__i + 0]; ++G__315657__i;}
  args = new cljs.core.IndexedSeq(G__315657__a,0);
} 
return G__315656__delegate.call(this,args);};
G__315656.cljs$lang$maxFixedArity = 0;
G__315656.cljs$lang$applyTo = (function (arglist__315658){
var args = cljs.core.seq(arglist__315658);
return G__315656__delegate(args);
});
G__315656.cljs$core$IFn$_invoke$arity$variadic = G__315656__delegate;
return G__315656;
})()
;

return null;
});
