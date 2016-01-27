goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__116958__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__116958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116959__i = 0, G__116959__a = new Array(arguments.length -  0);
while (G__116959__i < G__116959__a.length) {G__116959__a[G__116959__i] = arguments[G__116959__i + 0]; ++G__116959__i;}
  args = new cljs.core.IndexedSeq(G__116959__a,0);
} 
return G__116958__delegate.call(this,args);};
G__116958.cljs$lang$maxFixedArity = 0;
G__116958.cljs$lang$applyTo = (function (arglist__116960){
var args = cljs.core.seq(arglist__116960);
return G__116958__delegate(args);
});
G__116958.cljs$core$IFn$_invoke$arity$variadic = G__116958__delegate;
return G__116958;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__116961__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__116961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__116962__i = 0, G__116962__a = new Array(arguments.length -  0);
while (G__116962__i < G__116962__a.length) {G__116962__a[G__116962__i] = arguments[G__116962__i + 0]; ++G__116962__i;}
  args = new cljs.core.IndexedSeq(G__116962__a,0);
} 
return G__116961__delegate.call(this,args);};
G__116961.cljs$lang$maxFixedArity = 0;
G__116961.cljs$lang$applyTo = (function (arglist__116963){
var args = cljs.core.seq(arglist__116963);
return G__116961__delegate(args);
});
G__116961.cljs$core$IFn$_invoke$arity$variadic = G__116961__delegate;
return G__116961;
})()
;

return null;
});
