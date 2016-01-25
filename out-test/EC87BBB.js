goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14133__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14134__i = 0, G__14134__a = new Array(arguments.length -  0);
while (G__14134__i < G__14134__a.length) {G__14134__a[G__14134__i] = arguments[G__14134__i + 0]; ++G__14134__i;}
  args = new cljs.core.IndexedSeq(G__14134__a,0);
} 
return G__14133__delegate.call(this,args);};
G__14133.cljs$lang$maxFixedArity = 0;
G__14133.cljs$lang$applyTo = (function (arglist__14135){
var args = cljs.core.seq(arglist__14135);
return G__14133__delegate(args);
});
G__14133.cljs$core$IFn$_invoke$arity$variadic = G__14133__delegate;
return G__14133;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14136__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14137__i = 0, G__14137__a = new Array(arguments.length -  0);
while (G__14137__i < G__14137__a.length) {G__14137__a[G__14137__i] = arguments[G__14137__i + 0]; ++G__14137__i;}
  args = new cljs.core.IndexedSeq(G__14137__a,0);
} 
return G__14136__delegate.call(this,args);};
G__14136.cljs$lang$maxFixedArity = 0;
G__14136.cljs$lang$applyTo = (function (arglist__14138){
var args = cljs.core.seq(arglist__14138);
return G__14136__delegate(args);
});
G__14136.cljs$core$IFn$_invoke$arity$variadic = G__14136__delegate;
return G__14136;
})()
;

return null;
});
