goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81291__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81292__i = 0, G__81292__a = new Array(arguments.length -  0);
while (G__81292__i < G__81292__a.length) {G__81292__a[G__81292__i] = arguments[G__81292__i + 0]; ++G__81292__i;}
  args = new cljs.core.IndexedSeq(G__81292__a,0);
} 
return G__81291__delegate.call(this,args);};
G__81291.cljs$lang$maxFixedArity = 0;
G__81291.cljs$lang$applyTo = (function (arglist__81293){
var args = cljs.core.seq(arglist__81293);
return G__81291__delegate(args);
});
G__81291.cljs$core$IFn$_invoke$arity$variadic = G__81291__delegate;
return G__81291;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81294__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81295__i = 0, G__81295__a = new Array(arguments.length -  0);
while (G__81295__i < G__81295__a.length) {G__81295__a[G__81295__i] = arguments[G__81295__i + 0]; ++G__81295__i;}
  args = new cljs.core.IndexedSeq(G__81295__a,0);
} 
return G__81294__delegate.call(this,args);};
G__81294.cljs$lang$maxFixedArity = 0;
G__81294.cljs$lang$applyTo = (function (arglist__81296){
var args = cljs.core.seq(arglist__81296);
return G__81294__delegate(args);
});
G__81294.cljs$core$IFn$_invoke$arity$variadic = G__81294__delegate;
return G__81294;
})()
;

return null;
});
