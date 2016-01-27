goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39288__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39289__i = 0, G__39289__a = new Array(arguments.length -  0);
while (G__39289__i < G__39289__a.length) {G__39289__a[G__39289__i] = arguments[G__39289__i + 0]; ++G__39289__i;}
  args = new cljs.core.IndexedSeq(G__39289__a,0);
} 
return G__39288__delegate.call(this,args);};
G__39288.cljs$lang$maxFixedArity = 0;
G__39288.cljs$lang$applyTo = (function (arglist__39290){
var args = cljs.core.seq(arglist__39290);
return G__39288__delegate(args);
});
G__39288.cljs$core$IFn$_invoke$arity$variadic = G__39288__delegate;
return G__39288;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39291__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39292__i = 0, G__39292__a = new Array(arguments.length -  0);
while (G__39292__i < G__39292__a.length) {G__39292__a[G__39292__i] = arguments[G__39292__i + 0]; ++G__39292__i;}
  args = new cljs.core.IndexedSeq(G__39292__a,0);
} 
return G__39291__delegate.call(this,args);};
G__39291.cljs$lang$maxFixedArity = 0;
G__39291.cljs$lang$applyTo = (function (arglist__39293){
var args = cljs.core.seq(arglist__39293);
return G__39291__delegate(args);
});
G__39291.cljs$core$IFn$_invoke$arity$variadic = G__39291__delegate;
return G__39291;
})()
;

return null;
});
