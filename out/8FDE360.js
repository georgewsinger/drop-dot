goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18221__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18222__i = 0, G__18222__a = new Array(arguments.length -  0);
while (G__18222__i < G__18222__a.length) {G__18222__a[G__18222__i] = arguments[G__18222__i + 0]; ++G__18222__i;}
  args = new cljs.core.IndexedSeq(G__18222__a,0);
} 
return G__18221__delegate.call(this,args);};
G__18221.cljs$lang$maxFixedArity = 0;
G__18221.cljs$lang$applyTo = (function (arglist__18223){
var args = cljs.core.seq(arglist__18223);
return G__18221__delegate(args);
});
G__18221.cljs$core$IFn$_invoke$arity$variadic = G__18221__delegate;
return G__18221;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18224__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18225__i = 0, G__18225__a = new Array(arguments.length -  0);
while (G__18225__i < G__18225__a.length) {G__18225__a[G__18225__i] = arguments[G__18225__i + 0]; ++G__18225__i;}
  args = new cljs.core.IndexedSeq(G__18225__a,0);
} 
return G__18224__delegate.call(this,args);};
G__18224.cljs$lang$maxFixedArity = 0;
G__18224.cljs$lang$applyTo = (function (arglist__18226){
var args = cljs.core.seq(arglist__18226);
return G__18224__delegate(args);
});
G__18224.cljs$core$IFn$_invoke$arity$variadic = G__18224__delegate;
return G__18224;
})()
;

return null;
});
