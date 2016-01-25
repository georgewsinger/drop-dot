goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13823__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13824__i = 0, G__13824__a = new Array(arguments.length -  0);
while (G__13824__i < G__13824__a.length) {G__13824__a[G__13824__i] = arguments[G__13824__i + 0]; ++G__13824__i;}
  args = new cljs.core.IndexedSeq(G__13824__a,0);
} 
return G__13823__delegate.call(this,args);};
G__13823.cljs$lang$maxFixedArity = 0;
G__13823.cljs$lang$applyTo = (function (arglist__13825){
var args = cljs.core.seq(arglist__13825);
return G__13823__delegate(args);
});
G__13823.cljs$core$IFn$_invoke$arity$variadic = G__13823__delegate;
return G__13823;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13826__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13827__i = 0, G__13827__a = new Array(arguments.length -  0);
while (G__13827__i < G__13827__a.length) {G__13827__a[G__13827__i] = arguments[G__13827__i + 0]; ++G__13827__i;}
  args = new cljs.core.IndexedSeq(G__13827__a,0);
} 
return G__13826__delegate.call(this,args);};
G__13826.cljs$lang$maxFixedArity = 0;
G__13826.cljs$lang$applyTo = (function (arglist__13828){
var args = cljs.core.seq(arglist__13828);
return G__13826__delegate(args);
});
G__13826.cljs$core$IFn$_invoke$arity$variadic = G__13826__delegate;
return G__13826;
})()
;

return null;
});
