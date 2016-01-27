goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31526__i = 0, G__31526__a = new Array(arguments.length -  0);
while (G__31526__i < G__31526__a.length) {G__31526__a[G__31526__i] = arguments[G__31526__i + 0]; ++G__31526__i;}
  args = new cljs.core.IndexedSeq(G__31526__a,0);
} 
return G__31525__delegate.call(this,args);};
G__31525.cljs$lang$maxFixedArity = 0;
G__31525.cljs$lang$applyTo = (function (arglist__31527){
var args = cljs.core.seq(arglist__31527);
return G__31525__delegate(args);
});
G__31525.cljs$core$IFn$_invoke$arity$variadic = G__31525__delegate;
return G__31525;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31529__i = 0, G__31529__a = new Array(arguments.length -  0);
while (G__31529__i < G__31529__a.length) {G__31529__a[G__31529__i] = arguments[G__31529__i + 0]; ++G__31529__i;}
  args = new cljs.core.IndexedSeq(G__31529__a,0);
} 
return G__31528__delegate.call(this,args);};
G__31528.cljs$lang$maxFixedArity = 0;
G__31528.cljs$lang$applyTo = (function (arglist__31530){
var args = cljs.core.seq(arglist__31530);
return G__31528__delegate(args);
});
G__31528.cljs$core$IFn$_invoke$arity$variadic = G__31528__delegate;
return G__31528;
})()
;

return null;
});
