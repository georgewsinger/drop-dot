goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14650__i = 0, G__14650__a = new Array(arguments.length -  0);
while (G__14650__i < G__14650__a.length) {G__14650__a[G__14650__i] = arguments[G__14650__i + 0]; ++G__14650__i;}
  args = new cljs.core.IndexedSeq(G__14650__a,0);
} 
return G__14649__delegate.call(this,args);};
G__14649.cljs$lang$maxFixedArity = 0;
G__14649.cljs$lang$applyTo = (function (arglist__14651){
var args = cljs.core.seq(arglist__14651);
return G__14649__delegate(args);
});
G__14649.cljs$core$IFn$_invoke$arity$variadic = G__14649__delegate;
return G__14649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14653__i = 0, G__14653__a = new Array(arguments.length -  0);
while (G__14653__i < G__14653__a.length) {G__14653__a[G__14653__i] = arguments[G__14653__i + 0]; ++G__14653__i;}
  args = new cljs.core.IndexedSeq(G__14653__a,0);
} 
return G__14652__delegate.call(this,args);};
G__14652.cljs$lang$maxFixedArity = 0;
G__14652.cljs$lang$applyTo = (function (arglist__14654){
var args = cljs.core.seq(arglist__14654);
return G__14652__delegate(args);
});
G__14652.cljs$core$IFn$_invoke$arity$variadic = G__14652__delegate;
return G__14652;
})()
;

return null;
});
